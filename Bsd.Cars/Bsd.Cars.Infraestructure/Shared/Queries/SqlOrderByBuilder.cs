﻿using Bsd.Cars.Application.Shared.Request;
using Bsd.Cars.Infraestructure.Queries;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Bsd.Cars.Infraestructure.Shared.Queries
{
    public class SqlOrderByBuilder
    {
        private readonly string _defaultOrderBy;
        private readonly Dictionary<string, string> _columns;
        private readonly ISortRequest _request;
        private const string OrderByFormat = " ORDER BY {0}";
        private const string OrderBy = " ORDER BY";

        public SqlOrderByBuilder(string defaultOrderBy, Dictionary<string, string> columns, ISortRequest request)
        {
            _defaultOrderBy = defaultOrderBy;
            _columns = columns;
            _request = request;
        }

        public string Build()
        {
            var sql = new StringBuilder();

            var sorts = _request.Sort?.Where(e => !string.IsNullOrWhiteSpace(e.Dir)).ToList();

            if (sorts != null && sorts.Any())
            {
                sql.Append(OrderBy);

                for (var i = 0; i < sorts.Count; i++)
                {
                    var sort = sorts.ElementAt(i);
                    var separator = i + 1 < sorts.Count ? "," : string.Empty;
                    sql.Append($" {_columns[sort.Field]} {Constants.Sort.Directions[sort.Dir]}{separator}");
                }
            }
            else
            {
                sql.AppendFormat(OrderByFormat, _defaultOrderBy);
            }

            return sql.ToString();
        }
    }
}
